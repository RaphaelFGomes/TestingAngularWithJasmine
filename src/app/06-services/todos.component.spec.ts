import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];

    // here we are using Fake information for test
    // We are changing the implementation of the getTodos method
    // We are not using the original getTodos from service, 
    // instead of this, we are using fake information [1, 2, 3]
    spyOn(service, 'getTodos').and.callFake(() => {
      // This is an example how to use in another way
      // return Observable.from([ [
      //   {id: 1, title: 'a'},
      //   {id: 2, title: 'b'},
      //   {id: 3, title: 'c'},
      // ] ])
      return Observable.from([ todos ])
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
    // expect(component.todos).toBe(todos); other approuch
  });

  it('should call the server to save the change when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1};
    // Using arrow function
    // let spy = spyOn(service, 'add').and.callFake(t => {
    //   return Observable.from([todo]);
    // });
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
   
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);

  });

});