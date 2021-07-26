// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import Post from './types/Post'
import Author from './types/Author'
import Category from './types/Category'
import BlockContent from './types/BlockContent'
import Comment from './types/Comment'
// import Settings from './types/Settings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Global settings
    // Settings,
    // The following are document types which will appear
    // in the studio.
    Post,
    Author,
    Category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    BlockContent,
    Comment,
  ])
})
