import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // Arrange
    component = new VoteComponent();
  });

  afterEach (() => {}) // it will be called after each tests
  beforeAll(() => {}) // Will be executed once before all tests
  afterAll(() => {}) // Will be executed once after all tests

  it('should increment totalVotes when upvoted', () => {

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1)
  });

  it('should decrement totalVotes when downvoted', () => {

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1)
  });

});