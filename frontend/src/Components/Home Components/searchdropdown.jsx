export default function search(){
    return (

        <ul className="absolute w-full bg-white border mt-1 rounded shadow-lg max-h-60 overflow-auto">
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.name)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {item.name}
            </li>
          ))}

          <p>gehj</p>
        </ul>

    )
} 