# Validation

[[toc]]

Unless you like to live dangerously, any Pangaso fields that are displayed on the Pangaso creation / update screens will need some validation. Pangaso uses and supports all the validation rules from the [Indicative validation library](http://indicative.adonisjs.com).

### Attaching Rules

When defining a field on a resource, you may use the `createWithRules` method to attach validation rules to the field:

```js
Text.make('Email').createWithRules('required|max:40|email')
```
