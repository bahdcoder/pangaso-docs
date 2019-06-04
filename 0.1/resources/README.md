# The Basics

[[toc]]

Pangaso is a beautiful administration dashboard for MongoDB databases. Of course, the primary feature of Pangaso is the ability to administer your underlying database records. Pangaso accomplishes this by allowing you to define a Pangaso "resource" that corresponds to each database collection in your database.

## Defining Resources

By default, Pangaso resources are stored in a directory called `pangaso` at the root of your application directory. You may generate a new resource using the `make:resource` cli command:

```bash
npx pangaso make:resource Post
```

The most basic and fundamental property of a resource is its `collection` property. This property tells Pangaso which database collection the resource corresponds to. By default, the collection is the pluralized lowercase version of the resourrce. For example, a `Post` resource connects to a `posts` collection. To override the corresponding collection, you can define a `collection` method on the resource class which returns the collection name. 

```js
/**
 * The collection the resource corresponds to.
 *
 * @return string
 */
collection() {
    return 'posts'
}
```

## Registering Resources

:::tip Automatic Registration

By default, all resources within the `pangaso` directory will automatically be registered with Pangaso. You are not required to manually register them.
:::

Once your resources are registered with Pangaso, they will be available in the Pangaso sidebar:

<!-- ![Pangaso Dashboard](./img/dashboard.png) -->
