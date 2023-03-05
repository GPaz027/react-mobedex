export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

// La función recibe un type T genérico, que es lo que se retornará dentro de la promesa.