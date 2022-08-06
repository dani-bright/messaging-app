export async function fetchApi<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  path: string,
  token?: string,
  params: {
    query?: Record<string, any>;
    body?: Record<string, any>;
    headers?: Record<string, any>;
  } = {},
  signal?: AbortSignal,
): Promise<T> {
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  if (params.body && !(params.body instanceof FormData)) {
    headers.append('Content-Type', 'application/json');
  }

  Object.entries(params.headers || {}).forEach(([key, value]) => {
    headers.append(key, value);
  });

  const response = await fetch(`http://localhost:5000/${path}`, {
    method,
    headers: headers,
    signal,
    body:
      params.body && !(params.body instanceof FormData)
        ? JSON.stringify(params.body)
        : params.body,
  });

  if (!response.ok) {
    throw await response.json();
  }

  if (response.headers.get('Content-Type')?.includes('application/json')) {
    return response.json();
  }

  return response.text() as any;
}
