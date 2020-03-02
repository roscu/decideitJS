(function() {
  // the timeline object of events
  let Timeline = {
    Events: []
  };

  /* 
  the type of events that can be appended to the timeline object
  each return an event object consisting of vars, views and methods
      
  {
      type        // the type will correspond to the type of methods
      name        // name of the even given by the user
      content     // where the contet is saved 
      views       // html that is displayed on the
      {
                  //controllers object that contains the methods for each view
      }
  }
  
  *  list  *
  - value (threshold based like 400 points out of 500 to pass)
  - weighted (based on proportions of a criteria)
    - checklist (that there is a minimum amount of requirements that i should create)
    - pros and cons (to label what is good and bad)
    > pruning (ability to cross off)
  - grading (to be able to rank by tiers S,A,B,C ... F)
  - ranking (to be able to establish order of 1st place 2nd place, 3rd place , ...  etc )
    > relational ( to be able to establish a relationship between two or more types on the list)
    >logical joinings of AND, OR, JOIN, DISJOIN, Parralel, CONFLICT
    > timeline (an event based choice )
    > categorical ( a method of sorting and putting things in their spot)
  
  
  premade:
    
    custom have them intriquet
    timeline -> {*} => establish conflicting events // combine with anything
    categorical -> prunning => elimination based on category // surface level choice
                -> {*}  
    pros and cons => value based  which is bigger 
                  -> weighted => we can add a bias
    checklist => threshold
              -> value => we can stop it early ie only 8 of the 10 thing son the list is still ok
    relational -> {*} => combined using logical and relational operations

    ranking -> conflicting events
    grading -> parallel events 
      grading can be defined as S = 0 , A = 1 , B = 2, .. etc as to allow max and min


  value collections:( contents => value outcomes work in parallel)
      pruning // 0's
    pros and cons // -1 or 1's          
    values (normals?)  // range (0 to inf)'s ~> weights
      weighted // range (0 to 1 )'s  ~> -wegihts
      singletons // single values aka 1 ~> cons or pros
  
  structure:
  scenerios
    timeline
      category
        grading
          pros and cons
          value
          weighted 
        ranking
          pros and cons
          value
          weighted 
        checklist
          singletons
        indep(order){pros and cons, value, weighted,singleton}
      indep(categry){pros and cons, value, weighted,singleton}
    indep(time){pros and cons, value, weighted,singleton}

    => relational, and prunning appended to all
    indep are default
    singletons are default

    tables????

  */

  class Base {
    constructor(value, content) {
      this.value = value;
      this.content = content;
      return this;
    }
  }

  let CONTENT = "this is a users string of content";
  let DEP = true;

  if (DEP) {
    const prune = new Base(0, CONTENT);
  } else {
    const singleton = new Base(1, CONTENT);
  }

  // get user from db
  // let user from db be user1
  // let user1 = new TimeLine()
  // let user create any number of scenerios
  // let user1.timeline.scenerio = new array(2)
  // let user1.scenerio[0] = content1
  // let user1.scenerio[1] = content2
  // let user select what to do with the content, ie the type of decision
  // let new decision be added to the scenerio
  // let user create a next event
  //let user crete more scenerios and add to this event but add a cap
  // return a structured object or json file with the users saved scenerio
  //save the scenerio
  //allow users to have many timelines
  // all defaults should be pure and be content-based first


})();
