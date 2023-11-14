import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

function Newsletter() {
  return (
    <div className="grid gap-y-8">
      <h1 className="font-medium text-lg">Newsletter</h1>
      <ul className="grid gap-y-5">
        <li>
          <p className="text-sm font-normal text-light1">
            Get now free 50% discount for alll products on your first order
          </p>
        </li>
        <li className="flex">
          <input
            type="text"
            placeholder="Your email address"
            className="pl-4 py-2 text-sm font-normal bg-transparent border-t border-b border-l border-black rounded-l-lg placeholder:text-black placeholder:text-sm placeholder:font-normal"
          />
          <button className="pl-3 pr-2 py-2 bg-primary text-white border-none uppercase rounded-r-lg">
            Send
          </button>
        </li>
        <li className="flex">
          <img src={mail} alt="mail" />
          <p className="font-normal text-sm p-1">elemesid@gmail.com</p>
        </li>
        <li className="flex">
          <img src={phone} alt="phone" />
          <p className="font-normal text-sm p-1">0888 1111 2222</p>
        </li>
      </ul>
    </div>
  );
}

export default Newsletter;
