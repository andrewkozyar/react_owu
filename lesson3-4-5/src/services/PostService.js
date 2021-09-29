
export default class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts/'
    
    getAllPosts = async () => {
        return await fetch(this.url).then(value => value.json()).catch(err => console.log(err))
    }

    getPostById = async (id) => {
        return await fetch(`${this.url}${id}`).then(value => value.json()).catch(err => console.log(err))
    }

}
