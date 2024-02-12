import React from 'react'

const SingleProductDetails = () => {
  return (
    <>
      <div className='flex justify-center my-10'>
        <div className="card card-side w-[80%] rounded-xl bg-base-200 shadow-xl">
          <div className='w-[30%]'>
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          </div>
          <div className="card-body w-[70%]">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt voluptates facere atque voluptatum. Ullam laudantium, quae suscipit quas est ipsum voluptates tempore consectetur eius quod pariatur delectus quaerat temporibus voluptate, perspiciatis, eveniet magnam corporis velit ratione recusandae autem necessitatibus! Laborum consectetur est obcaecati qui necessitatibus nam incidunt blanditiis dolor vero molestias eligendi similique voluptatem, delectus molestiae non ut veniam, dicta commodi voluptatibus eaque. Eveniet quasi inventore itaque consequuntur fugiat ducimus porro quisquam tempora, veniam voluptatem molestiae autem? Error et tenetur nulla, assumenda aliquid perspiciatis sequi molestias cumque veritatis distinctio quis obcaecati, neque iste perferendis suscipit sit quia. Iste, ea.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductDetails