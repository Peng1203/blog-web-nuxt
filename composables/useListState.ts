export const useListState = () => {
  return reactive({
    page: 1,
    pageSize: 10,
    total: 0,
    column: '',
    order: '',
    queryStr: '',
  });
};
