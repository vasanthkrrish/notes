import { Note } from "@prisma/client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const NoteCard = ({ note, onDelete }: { note: Note; onDelete: () => void }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="ng-base-100 card mt-5 border border-gray-200 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text.xl collapse-title font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
