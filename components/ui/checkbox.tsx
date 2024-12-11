export function Checkbox({ id }: { id: string }) {
    return (
      <input
        type="checkbox"
        id={id}
        className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
      />
    );
  }
  