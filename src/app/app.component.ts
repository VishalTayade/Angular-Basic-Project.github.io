import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Basic-Project';

  // How to call Function Basics
  funCalled() {
    alert("function called");
  }

  // How to call Single Function
  singleFun(name: string) {
    alert(name);
  }

  // How to call Multiple Function
  multipleFun(firstName: string, secondName: number) {
    alert(firstName);
    alert(secondName);
  }

  // How to call Function in Console
  consoleFun() {
    console.log("Showing in Console")
  }

  // How to call Function using Keyup Event
  keyupFun(val: string) {
    console.warn(val);
  }

  // How to call Function using Keydown Event
  keydownFun(val1: string) {
    console.warn(val1);
  }

  // How to call Function using Blur Event
  keyBlur(val2: string) {
    console.warn(val2);
  }

  // How to call Function using Input Event
  keyInput(val3: string) {
    console.warn(val3);
  }

  // How to call Function using Mouse Over Event
  mouseOver(val4: string) {
    console.warn(val4);
  }

  // How to call Function using Mouse Leave Event
  mouseLeave(val5: string) {
    console.warn(val5);
  }

  // How to get TextBox Value and print
  displayVal = '';
  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }

  // How to get TextBox Value and print using Button Click
  displayVal1 = '';
  getBtnValue(val1: string) {
    console.warn(val1);
    this.displayVal1 = val1;
  }

  // How to Make Counter Increased and Decreased priority
  count = 0
  counterVal(type: string) {
    type === 'Addition' ? this.count++ : this.count--
  }

  // If - Else Condition Example
  show = false

  // If-Else-If Condition Example
  color = 'blue'
  // using this colors red, green, blue

  // Switch Condition Example
  switchColor = 'yellow'
  // using this colors red, green, blue, orange, yellow, (this color for default)

  // Loops in Angular
  // using single array
  userData = ['Vishal', 'Sushant', 'Bunty', 'Shubham', 'Amit']

  // using array with objects for multiple values
  userDetails = [
    { name: 'Vishal', email: 'vishal@123.com', contact: '123456' },
    { name: 'Sushant', email: 'sushant@456.com', contact: '524865' },
    { name: 'Bunty', email: 'bunty@789.com', contact: '2356263' },
    { name: 'Shubham', email: 'shubham@321.com', contact: '7589654' },
    { name: 'Amit', email: 'amit@789.com', contact: '412589' }
  ];

  // Nested Loops in Angular
  nestedLoop = [
    { name: 'Bunty', contact: '123456', socialAcc: ['Facebook', 'Instagram', 'Whatsapp'] },
    { name: 'Vishal', contact: '36259', socialAcc: ['Whatsapp', 'Gmail', 'Instagram'] },
    { name: 'Sushant', contact: '785498', socialAcc: ['Gmail', 'Facebook', 'Whatsapp'] }
  ];

  // Style Binding in Angular
  colorData = "white";
  bgColor = "green"

  updateColor() {
    this.colorData = "black"
    this.bgColor = "red"
  }

  // Basics Form
  formData: any = {}

  getformData(data: NgForm) {
    console.warn(data)
    this.formData = data
  }

  // Toggle Element
  display = true

  toggleEle() {
    this.display = !this.display;
  }

  // Make Todo List
  todoList: any[] = []

  addData(item: string) {
    this.todoList.push({ id: this.todoList.length, name: item })
    console.warn(this.todoList)
  }
  removeTask(id: number) {
    console.warn(id)
  }

  // Send data Parent to Child Component
  dataValue = 10;

  updateChild() {
    this.dataValue = Math.floor(Math.random() * 10)
  }

  // Make Child (Reuseable) Component in for Loop
  userdetail = [
    { name: 'Vishal', email: 'vishal@xyz.com' },
    { name: 'Bunty', email: 'bunty@pqr.com' },
    { name: 'Sushant', email: 'shushant@fhd.com' },
    { name: 'Ajay', email: 'ajay@qwe.com' },
  ]

  // Send data Child to Parent Component
  data = "x";
  updateData(item: string) {
    console.warn(item)
    this.data = item
  }

  // Two way Binding
  bindingName: any

  // Pipes in Angular
  today = Date()

  // Advance Pipes in Angular
  userPipes = {
    name: 'Vishal',
    age: 28
  }

  // Reactive form with validation in Angular 
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  userLogin() {
    console.warn(this.loginForm.value)
  }

  get userValidator() {
    return this.loginForm.get('username')
  }

  get passwordValidator() {
    return this.loginForm.get('password')
  }

}
