import Post from "./Post"
const postData = [
    {
      "id": 1,
      "userId": 1,
      "title": "Мой первый пост",
      "body": "Всем привет! Это мой первый пост.",
      "image": null,
      "likes": 12,
      "comments": 3,
      "createdAt": "2026-09-01T10:30:00Z"
    },
    {
      "id": 2,
      "userId": 2,
      "title": "Красивый день",
      "body": "Сегодня отличный день для прогулки!",
      "image": "https://picsum.photos/id/1018/800/500",
      "likes": 45,
      "comments": 8,
      "createdAt": "2026-09-01T14:20:00Z"
    },
    {
      "id": 3,
      "userId": 3,
      "title": "Новый проект",
      "body": "Начал работать над новым проектом. Скоро покажу результат.",
      "image": null,
      "likes": 27,
      "comments": 5,
      "createdAt": "2026-09-02T09:15:00Z"
    },
    {
      "id": 4,
      "userId": 4,
      "title": "Путешествие",
      "body": "Невероятные виды и море впечатлений!",
      "image": "https://picsum.photos/id/1015/800/500",
      "likes": 63,
      "comments": 11,
      "createdAt": "2026-09-02T18:45:00Z"
    },
  ]


const Posts = () => {
    return (
        <section className="posts">

                <div className="section-header">
                    <h2>Posts</h2>
                    <span>4 posts</span>
                </div>

                <div className="posts-list">
                    {<Post />}
                </div>
        </section>
        

    )
}
export default Posts
