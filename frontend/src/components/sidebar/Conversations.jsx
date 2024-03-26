import { useSearchContext } from "../../context/SearchContext";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { search } = useSearchContext();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map(
        (conversation, idx) =>
          conversation.fullName
            .toLowerCase()
            .includes(search.toLowerCase()) && (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          )
      )}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
