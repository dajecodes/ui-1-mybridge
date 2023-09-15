import Cover from "../common/Cover";

const ContactUs = () => {
  return (
    <div>
      <Cover title={"Contact Us"} dataAos="fade-up" dataAosDuration="3000"/>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-12 col-md-6 p-0 m-0 g-0 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8765060320115!2d79.89917322602234!3d7.140276465686672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0171fa2d8e9%3A0x9374e0dacec393f9!2sRaddolugama%2C%20Katunayake!5e0!3m2!1sen!2slk!4v1694582608746!5m2!1sen!2slk"
              width="100%"
              height="450"
              title='google_map'
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 col-md-6 p-0 m-0 g-0  ">
            <div className="container my-5  ">
              <h1>Get in Touch</h1>
              <form action="">
                <div className="row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Service Inquired"
                      aria-label="Service Inquired"
                    />
                  </div>
                </div>
                <textarea
                  class="form-control mb-4 "
                  placeholder="Message"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
