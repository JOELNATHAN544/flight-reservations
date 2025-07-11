// API utility for flight ticket backend integration
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';

export async function fetchTickets() {
  const res = await fetch(`${API_BASE}/tickets`);
  if (!res.ok) throw new Error('Failed to fetch tickets');
  return res.json();
}

export async function searchTickets(params) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/tickets/search?${query}`);
  if (!res.ok) throw new Error('Failed to search tickets');
  return res.json();
}

export async function createTicket(ticket) {
  const res = await fetch(`${API_BASE}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });
  if (!res.ok) throw new Error('Failed to create ticket');
  return res.json();
}

export async function updateTicket(id, ticket) {
  const res = await fetch(`${API_BASE}/tickets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });
  if (!res.ok) throw new Error('Failed to update ticket');
  return res.json();
}

export async function deleteTicket(id) {
  const res = await fetch(`${API_BASE}/tickets/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete ticket');
} 