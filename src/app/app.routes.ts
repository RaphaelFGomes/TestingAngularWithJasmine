import { UserDetailsComponent } from "./integration-testing/3-user-details/user-details.component";
import { UsersComponent } from "./10-user-component/users.component";
import { TodosComponent } from "./06-services/todos.component";

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  // { path: '', component: HomeComponent },
];