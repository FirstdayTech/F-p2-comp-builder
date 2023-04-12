import mockDb from "./mockDb";

const mockApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockDb });
    }, 500); // Simula um atraso de 500ms
  });
};

export const getChampions = () => {
  return mockApiCall();
};
