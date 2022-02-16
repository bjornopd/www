import { SAMPLE_POSTS } from '../data/posts.js'

const elTopPostImage = document.getElementById('top-post-image')
const elTopPost = document.getElementById('top-post')
const elPosts = document.getElementById('posts')

//console.log(elTopPostImage)
//console.log(elTopPost)
//console.log(elPosts)


// const topPost = SAMPLE_POSTS[0]         2 linjer
// const posts = SAMPLE_POSTS.slice(1)

// eller 1 linje som under her
const [ topPost, ...posts ] = SAMPLE_POSTS

function createPost(post) {

    return`
    
    <section class="card shadow">
        <img class="card-img-top" src="${post.photo}" alt="" />
        <div class="card-body">
            <b class="text-muted d-block mb-4">${post.date}</b>
            <h2 class="mb-1">${post.title}</h2>
            <h4 class="text-muted mb-4">${post.subTitle}</h4>
            <p>${post.intro}</p>
    
            <p class="text-muted d-flex align-items-center">
                <span class="material-icons">person</span>
                Written by ${post.author}
            </p>
    
            <footer>
            ${ createTags(post.tags) }
            </footer>
        </div>
    </section>
    `
}

// This is your code
//function createTags(tags) {
  //  return tags
    //    .map(tag => `<span class="badge bg-primary">#${tag}</span>`)
      //  .join(' ')
//}

function createTags(tags) {
    let text=""
    for (let i =0; i<tags.length;i++){
    text += '<span class="badge bg-danger p-2 m-2 " >'+ tags[i]+'</span>' ;
    }
    return text
    
    }
    

function createTopPost(post){

    elTopPostImage.src = topPost.photo
    //Interpolation
    //Template literals
    elTopPost.innerHTML = `
        <b class="text-muted d-block mb-4">${topPost.date}</b>
        <h2 class="mb-1">${topPost.title}</h2>
        <h4 class="text-muted mb-4">${topPost.subTitle}</h4>
        <p>${topPost.intro}</p>

        <p class="text-muted d-flex align-items-center">
            <span class="material-icons">person</span>
            Written by ${topPost.author}
        </p>

        <footer>
        ${ createTags(post.tags) }
        </footer>
    `   
}






//invoke
createTopPost(topPost)


for (const post of posts) {
    const postHTML = createPost(post)
    elPosts.innerHTML += createPost(post)
}