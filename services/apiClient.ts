// Configuración de la URL base de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';


function buildUrl(endpoint: string): string {
  // Si el endpoint ya es una URL completa, la retorna
  if (endpoint.startsWith('http')) {
    return endpoint;
  }
  // Si el endpoint ya empieza con /api, solo agrega la base
  if (endpoint.startsWith('/api')) {
    return `${API_BASE_URL}${endpoint}`;
  }
  // De lo contrario, agrega /api y el endpoint
  return `${API_BASE_URL}/api${endpoint}`;
}


async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `Error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}


export async function get<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });
  return handleResponse<T>(res);
}
export async function post<T>(endpoint: string, body: unknown, init?: RequestInit): Promise<T> {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    body: JSON.stringify(body),
    ...init,
  });
  return handleResponse<T>(res);
}




export async function put<T>(endpoint: string, body: unknown, init?: RequestInit): Promise<T> {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    body: JSON.stringify(body),
    ...init,
  });
  return handleResponse<T>(res);
}


export async function patch<T>(endpoint: string, body: unknown, init?: RequestInit): Promise<T> {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    body: JSON.stringify(body),
    ...init,
  });
  return handleResponse<T>(res);
}

export async function del<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });
  return handleResponse<T>(res);
}
