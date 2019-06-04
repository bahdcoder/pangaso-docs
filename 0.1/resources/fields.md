# Fields

[[toc]]

## Defining Fields

Each Pangaso resource contains a `fields` method. This method returns an array of fields, each corresponding to a field in the corresponding resource collection. Pangaso ships with a variety of fields out of the box, including fields for text inputs, booleans, dates, file uploads, selects, and more.

To add a field to a resource, we can simply add it to the  return array of the resource's `fields` method. Typically, fields may be created using their static `make` method. This method accepts several arguments; however, you usually only need to pass the "human readable" name of the field. Pangaso will automatically "camel case" this string to determine the underlying collection field:

```js

const {
    ID,
    Text,
    Resource,
} = require('pangaso')

class Contact extends Resource {
    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */
    fields() {
        return [
            ID.make('ID'),
            Text.make('First Name').searchable()
        ];
    }
}

module.exports = Contact

```

### Resource field to Collection field Conventions

As noted above, Pangaso will "camel case" the displayable name of the field to determine the underlying collection field. However, if necessary, you may pass the matching collection field name as the second argument to the field's `make` method:

```js
Text.make('First Name', 'firstName')
```

## Searchable Fields

When attaching a field to a resource, you may use the `searchable` method to make this field searchable when searching this resource.

```js
Text::make('Name', 'name_column')->searchable()
```

## Field Types

Pangaso ships with a variety of field types. So, let's explore all of the available types and their options:

- [Boolean](#boolean-field)
- [File](#file-field)
- [ID](#id-field)
- [Image](#image-field)
- [Number](#number-field)
- [Password](#password-field)
- [Select](#select-field)
- [Text](#text-field)
- [Textarea](#textarea-field)

### Boolean Field

The `Boolean` field may be used to represent a boolean field in your collection. For example, assuming your collection has a boolean field named `active`, you may attach a `Boolean` field to your resource like so:

```js
const { Boolean } = require('pangaso')

Boolean.make('Active')
```

### File Field

The `File` field can be used to upload a file of any type to the server, and saves the path to this file as the corresponding document attribute.

```js
const { File } = require('pangaso')

File.make('Attachment')
```

### ID Field

The `ID` field represents the primary key of your resource's database collection. Typically, each Pangaso resource you define should contain an `ID` field. By default, the `ID` field assumes the underlying collection field is named `_id`:

```js
const { ID } = require('pangaso')

ID.make()
```

### Number Field

The `Number` field provides an `input` control with a `type` attribute of `number`:

```js
const { Num } = require('pangaso')

Number.make('Age')
```

<!-- You may use the `min`, `max`, and `step` methods to set their corresponding attributes on the generated `input` control:

```js
Number::make('price')->min(1)->max(1000)->step(0.01)
``` -->

### Password Field

The `Password` field provides an `input` control with a `type` attribute of `password`:

```js
const { Password } = require('pangaso')

Password.make('Password')
```

### Select Field

The `Select` field may be used to generate a drop-down select menu. The select menu's options may be defined using the `options` method:

```js
const { Select } = require('pangaso')

Select.make('Role').withOptions([{
    label: 'Administrator',
    value: 'admin'
}, {
    label: 'Manager',
    value: 'manager'
}, {
    label: 'Super Administrator',
    value: 'super-admin'
}]),
```

### Text Field

The `Text` field provides an `input` control with a `type` attribute of `text`:

```js
const { Text } = require('pangaso')

Text.make('Name')
```

### Textarea Field

The `Textarea` field provides a `textarea` control:

```js
const { Textarea } = require('pangaso')

Textarea.make('Bio')
```

By default, Textarea fields will not display their content when viewing a resource on its detail page. It will be hidden behind a "Show Content" link, that when clicked will reveal the content. You may specify the Textarea field should always display its content by calling the `alwaysShow` method on the field itself:

```js
Textarea.make('Bio').alwaysShow()
```

You may also specify the textarea's height by calling the `rows` method on the field:

```js
Textarea.make('Bio').rows(12)
```

## Computed Fields

In addition to displaying fields that are associated with fields in your database collection, Pangaso allows you to create "computed fields". Computed fields may be used to display computed values that are not associated with a database field. Since they are not associated with a database field, computed fields may not be `sortable`. These fields may be created by calling the `computedWith` method, passing in a resolver callback that returns the value of the field.

```js
Text.make('Full Name')
    .computedWith(document => `${document.firstName} ${document.lastName}`)
```

:::tip Document access

As you may have noticed in the example above, the resolver callback receives the document instance.
:::
