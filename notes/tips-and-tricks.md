# Tips

interfaces are exportable and other classes can use them with the `extends` keyword

```ts
import { SomeInterface } from "./someFile";

class SomeClass extends SomeInterface {
  // do stuff
}
```
