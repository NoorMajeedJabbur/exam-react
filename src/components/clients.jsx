import Table from "./common/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./common/spinner";
import ClientsForm from "./clientsForm";
import Pagination from "./common/pagination";

const Clients = () => {
  const [clients, setClients] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const columns = [
    { path: "id", label: "ID" },
    { path: "first_name", label: "First_Name" },
    { path: "last_name", label: "Last_Name" },
    { path: "email", label: "E-mail" },
    { path: "gender", label: "Gender" },

    { path: "ip_address", label: "Ip_address" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>

          <button
            className="btn btn-warning m-2"
            onClick={() => setSelectedItem(item)}
          >
            Edit
          </button>

          <Link className="btn btn-primary " to={`/clients/${item.id}`}>
            View
          </Link>
        </>
      ),
    },
  ];
  useEffect(() => {
    fetch("/clients.json")
      .then((response) => response.json())
      .then((json) => setClients(json));
  }, []);

  const handleDelete = (item) => {
    const newData = clients.filter((clients) => clients.id !== item.id);
    setClients(newData);
    console.log("hello");
    toast.warning("User is deleted successfully...", { theme: "colored" });
  };

  return (
    <>
      <h1> Clients page</h1>

      <div className="row">
        <div className="col-8">
          {clients ? (
            <>
              {" "}
              <Table columns={columns} data={paginatedData} />
              <Pagination setPaginatedData={setPaginatedData} data={clients} />
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <div className="col-4 ">
          <ClientsForm
            data={clients}
            setData={setClients}
            selectedItem={selectedItem}
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
