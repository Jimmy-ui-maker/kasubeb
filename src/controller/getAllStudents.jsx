export default async function getAllStudents() {
  try {
    const response = await fetch("http://localhost:3000/api//kadsubeb_api", {
      cache: "no-store",
    });
    return response.json();
   
  } catch (error) {
    console.log(error);
  }
}
