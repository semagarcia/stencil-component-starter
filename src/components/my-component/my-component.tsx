import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;

  @Prop()
  last: string;

  foo() {
    const sema = 2;
    return sema * 2
  }

  baz() {
    console.log('Method not called!');
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
