
import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Boardpay.css';


const BoardTile = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  
    const [users, setUsers] = useState([]);


//더미 데이터 호출
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setInfo(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  
    useEffect(() => {
        
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            console.log("useEffect");
            setUsers(response);
            console.log(users)
            });
    }, []);

  const dada = [{
    id: 'ada'
  }]
  
  const { data, isError, isFetching, isLoading, refetch } =
    useQuery(
      [
        'table-data',
        columnFilters,
        globalFilter,
        pagination.pageIndex,
        pagination.pageSize,
        sorting,
      ],
      async () => {
        const url = new URL(
          // '/api/data',
          '/users',
          process.env.NODE_ENV === 'production'
            // ? 'https://www.material-react-table.com'
            ? 'https://jsonplaceholder.typicode.com'
            // : 'http://localhost:3000/board',
            :
            //'http://localhost:3000/board
              'https://jsonplaceholder.typicode.com',
          console.log("https://jsonplaceholder.typicode.com")
        );
        url.searchParams.set('users',
          `${pagination.pageIndex * pagination.pageSize}`);
        
          // `${pagination.pageIndex * pagination.pageSize}`,
        // );
        url.searchParams.set('size', `${pagination.pageSize}`);
        url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
        url.searchParams.set('globalFilter', globalFilter ?? '');
        url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

        const { data: axiosData } = await axios.get(url.href);
        
          // axios.get('https://jsonplaceholder.typicode.com/users')
          // .then(response => {
          //   console.log("useEffect");
          //   axiosData(response);
          //   console.log(users)
          //   });
        console.log(data);
        console.log(axiosData);
        return axiosData;
      },
      { keepPreviousData: true },
    );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'id',
      },
      {
        accessorKey: 'name',
        header: 'name',
      },
      {
        accessorFn: (row) => row.address.city,
        header: "city",
      },
      {
        accessorKey: 'website',
        header: 'website',
      },
      {
        accessorKey: 'phone',
        header: 'phone',
      },
    ],
    [],
  );
  console.log("확인용");

  
  console.log(pagination.pageSize);
  console.log(columnFilters);

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}

      // data={query  => 
      //   new Promise((resolve, reject) => {
      //     let url = 'https://jsonplaceholder.typicode.com/users'
      //     fetch(url)
      //       .then(response => response.json())
      //       .then(result => {
      //         resolve({
      //           data: result.data,
      //           page: result.page - 1,
      //           totalCount: result.total,
      //       })
      //     })
      //   })
      // } //data is undefined on first render
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      enableRowVirtualization
      enablePagination={false}
      muiToolbarAlertBannerProps={
        isError
          ? {
            color: 'error',
            children: 'Error loading data',
          }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      renderTopToolbarCustomActions={() => (
        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      )}
      rowCount={data?.meta?.totalRowCount ?? 0}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
    />
  );
};

const queryClient = new QueryClient();

const BoardPay = () => (
  <div className='pay-table'>
  <QueryClientProvider client={queryClient}>
    <BoardTile />
  </QueryClientProvider>
  </div>
    );

export default BoardPay;