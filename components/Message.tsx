import { DocumentData } from "firebase/firestore";
type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  return (
    <div className="py-5">
      <div className="flex space-x-3 px-10 max-w-2xl mx-auto">
        <div className="flex-shrink-0">
          <img src={message.user.avatar} className="rounded-full h-6 " />
        </div>
        <div>
          <p className="text-white text-sm font-medium">{message.user.name}</p>
          <p className="text-white pt-1 ">{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
