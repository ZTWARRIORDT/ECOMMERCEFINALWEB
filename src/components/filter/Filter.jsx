import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Filter() {
  const context = useContext(myContext);
  const {
    mode = 'light',
    searchkey = '',
    setSearchkey = () => {},
    filterType = '',
    setFilterType = () => {},
    filterPrice = '',
    setFilterPrice = () => {},
    product = [],
  } = context;

  // Lógica de filtrado que no discrimina mayúsculas/minúsculas
  const filteredProducts = (product || []).filter((item) =>
    item?.name?.toLowerCase().includes(searchkey.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto px-4 mt-5">
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === 'dark' ? '#282c34' : '',
            color: mode === 'dark' ? 'white' : '',
          }}
        >
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." />
              </svg>
            </div>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
              placeholder="Buscar aquí"
              className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
              style={{
                backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '',
                color: mode === 'dark' ? 'white' : '',
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filtrar</p>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              {/* Filtrar por categoría */}
              <input
                list="categories"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                placeholder="Seleccionar o escribir categoría"
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              />
              <datalist id="categories">
                {[...new Set((product || []).map((item) => item.category || ''))].map(
                  (category, index) => (
                    <option key={index} value={category} />
                  )
                )}
              </datalist>

              {/* Filtrar por precio */}
              <input
                list="prices"
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                placeholder="Seleccionar o escribir precio"
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              />
              <datalist id="prices">
                {[...new Set((product || []).map((item) => item.price || ''))].map(
                  (price, index) => (
                    <option key={index} value={price} />
                  )
                )}
              </datalist>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {filteredProducts.map((item, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md">
              <p className="font-bold">{item.name}</p>
              <p>Categoría: {item.category}</p>
              <p>Precio: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
