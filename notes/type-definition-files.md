# Type Definition Files

Whenever we are writing TS, we are free to use js libraries, however, TS wants to check your code via types. It wants to know the functions, the arguments, the return values, and in general it wants to know all of the different types of data in your code. If this information isn't available, then TS can't check the code, which is the whole point.

Using a JS library means that what comes from the library won't be typed, so we use a `Type Definition file`. Sometimes, when you install a library, type definition files will be automatically installed. VSCode will give a warning to help identify when a type definition file is needed.

## To install a Type Definition File

We can use the `DefinitelyTyped` module - search [npm](https://www.npmjs.com/) for `@types/<library name>`

## Using a Type Definition file

Once you've installed a `DefinitelyTyped` module, the import of the package associated will behave as a link. Clicking that link will take you to the type definition file that was installed. This file has a bonus use! Because it provides the types for everything contained in a package, you can also treat it like a sort of documentation to see what's available.
