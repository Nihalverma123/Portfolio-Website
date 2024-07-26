
import './Contact.css'
import nihal4 from '../../assets/assets/nihal5.png'
import location_icon from'../../assets/assets/location_icon.svg'
import call_icon from '../../assets/assets/call_icon.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b5240a1-46f4-4fd8-9749-661146f0362c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully")
       event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
<>

    <div id='contact' className='contactme'>
    <div className="contactme-title">
<h1>Get in touch</h1>
<img src={nihal4} alt="" />
    </div>
    <div className="contact-section">
      <div className="contact-left">
<h1>Let's Talk</h1>
<p> I am currentaly avilabal to take new project feel free to contact me</p>
<div className="contact-details">
  <div className="contact-detail">
<img src={mail_icon} alt="" /><p>nihalv197@gmail.com</p>
  </div>
  <div className="contact-detail">
<img src={call_icon} alt="" /><p>+91-8879986756</p>
  </div>
  <div className="contact-detail">
<img src={location_icon} alt="" /><p>jhansi</p>
  </div>
</div>
      </div>
      <form onSubmit={onSubmit} className='contact-right' >
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name=''/>
        <label htmlFor="">Email address</label>
        <input type="text" placeholder='Enter your email' name=''/>
        <label htmlFor="">Your address</label>
        <textarea name="massage" rows={8} placeholder='Write massage heare ...'  />
        <button type='submit' className="submmit-now">Submit-now</button>
      </form>
    </div>

     </div>
     </>
  )
}

export default Contact