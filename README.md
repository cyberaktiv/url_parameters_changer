### API:
| Method | Desctiption |
| ------ | ------ |
| **write(url, name, value)** | change or add (if not exists) parameter ***name*** with ***value*** , return new string |
| **delete(url, name)** | delete parameter ***name*** , return new string |

### How to use and examples:
```sh
const urlParam = new UrlParam();

// WRITE
urlParam.write('?category=23&post=8&version=90&s=str', 'category', 125); 
// return '?category=125&post=8&version=90&s=str'

urlParam.write('?version=90', 'category', '45');
// return '?version=90&category=45'

urlParam.write('?category=23', 'category', 'this is test');
// return '?category=this%20is%20test'

urlParam.write('?post=8&category=23', 'category', 10);
// return '?post=8&category=10'

urlParam.write('?post=8&category=23&version=90&s=str', 'category', 'this is test');
// return '?post=8&category=this%20is%20test&version=90&s=str'


// DELETE
urlParam.delete('?category=23&post=8&version=90&s=str', 'category'); 
// return '?post=8&version=90&s=str'

urlParam.delete('?category=23', 'category'); 
// return ''

urlParam.delete('?post=8&category=23', 'category'); 
// return '?post=8'

urlParam.delete('?post=8&category=23&version=90&s=str', 'category'); 
// return '?post=8&version=90&s=str'

urlParam.delete('?version=90', 'category'); 
// return '?version=90'
```