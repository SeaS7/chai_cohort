class A {
  //Default constructor == constructor(){}
  functionA() {
    console.log("A");
  }
}

// class B.__proto__ = A.prototype;
class B extends A {
  functionA() {
    super.functionA();
    console.log("B");
  }
 }



const b = new B();

b.functionA();
