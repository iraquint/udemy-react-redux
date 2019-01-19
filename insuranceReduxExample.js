console.clear();

// People dropping off a form (Action Creator)

const createPolicy = (name, amount) => {
  return {
    // Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name, amount) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers (Departments!)
// must be pure functions
// the first time the reducer is called, it could be undefined --> add default value

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload]; // ... join two arrays; add to brand new array
  }

  // we don't care about the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
};

// store -> collection of reducers/action creators

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

const action = createPolicy("Alex", 20);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));

store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 50));

store.dispatch(deletePolicy("Bob"));

console.log(store.getState());
