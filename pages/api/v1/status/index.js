function status(request, response) {
  response.status(200).json({ chave: "é um é dois é tres" });
}

export default status;
