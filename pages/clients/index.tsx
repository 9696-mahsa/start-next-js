import Link from 'next/link';

export default function ClientsPage() {
    const clients = [
      {id: "max" ,  name: "Maximilian"},
      {id: "manu" ,  name: "Manuel"},
    ];
    return (
      <>
        <h1>The clients page</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Link 
                href={{ 
                  pathname: "/clients/[id]" ,
                  query: {id: client.id}
                  }}> 
                  {client.name} 
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
  