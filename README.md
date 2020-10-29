# LifebonderTest
for the resolution of test 2 I decided to develop a simple app in angular.
It consists of two components and one service:
app-component and alert -component plus alertService.
In App-component there is a form developed according to template-driven approach.
Some fields are validated with the required html attribute.
All the input data required by the test are passed as an argument (form reference) to the
onSubmit() function, which checks if the form is valid.
Then it calls the method setMessage() injected by AlertService and pass in it an object.
If the form is valid, object will be :
{message: 'Post created successfully!!', type: 'alert-success'}
otherwise:
{message: 'Error! You have to fill all required fields!', type: 'alert-danger'}
The setMessage() method passes the argument to an observable that emits the value
through the next() method.
This observable is subscribed by the alert component which has the task of showing a
popup containing the message issued.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
