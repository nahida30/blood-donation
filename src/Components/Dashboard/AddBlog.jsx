

const AddBlog = () => {
    return (
        <div>
            <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Blog</span>
          </label>
          <input type="text" placeholder="Blog" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Text" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Blog</button>
        </div>
      </form>
        </div>
    );
};

export default AddBlog;