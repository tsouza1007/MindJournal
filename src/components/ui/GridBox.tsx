interface GridBoxProps {
    title: string;
    content: string;
    className?: string;
  }
  
  export function GridBox({ title, content, className }: GridBoxProps) {
    return (
      <div className={`p-4 rounded ${className}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  }