// import Swal from "sweetalert2";

const Blogs = () => {
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const productData = {name, brand, type, price, image, rating, description}
        console.log(productData);

        // fetch('https://fashion-apparel-server-side-p76d96gdy-nahidas-projects.vercel.app/products', {
        //   method: "POST",
        //   headers:{
        //     "Content-Type" : "application/json",
        //   },
        //   body:JSON.stringify(productData),
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //   console.log(data);
        //   if(data.insertedId){
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Updated Successfully',
        //         icon: 'success',
        //         confirmButtonText: 'Cool'
        //     })
        //   }
        //   form.reset()
        // })
        


    }
    return (
        <div>
           <h2 className="text-3xl font-extrabold text-center mt-5">Add Blog</h2>
            <form onSubmit={handleAddProduct} className="px-32">
                {/* product name and Brand name row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Content name</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Image" name="image" className="input input-bordered w-full" />
  </label>
</div>
                
                </div>


                


                {/* Add description row  */}
                <div className="mb-8">
                <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
  </label>
</div>
               
                
                </div>

               
                <input type="submit" value="Add Blog" className="btn btn-block bg-pink-800 text-white mb-20"/>






            </form>
        </div>
    );
};

export default Blogs;