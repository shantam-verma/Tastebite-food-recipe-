import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Form from 'next/form';
import { ActionButton } from '../ui/server/ActionButton';

export default function SearchForm() {
  return (
    <div className="relative max-w-full sm:max-w-sm mx-auto">
      <Form action="/search">
        <Input
          required
          name="query"
          placeholder="Search"
          className="w-full px-4 py-6 pl-10 bg-gray-200 dark:bg-black"
        />
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <ActionButton
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          Search
        </ActionButton>
      </Form>
    </div>
  );
}
