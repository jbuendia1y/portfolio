import { Navbar } from "@/components";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="fs-2 fw-bold text-center mb-2">Contact form</h1>
        <form>
          <div className="mb-2">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="My name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="myemail@example.com"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="subject" className="mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="My subject"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Hello!"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Submit
          </button>
        </form>
      </main>
      <style jsx>{`
        main {
          max-width: 700px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
