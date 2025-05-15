'use client'
import React from 'react';
import Calendar from './components/calendar';
import { Card, CardBody } from '@heroui/react';

const Page = () => {
  return (
<div className="mt-12 md:mt-0 container">

      <Card>
        <CardBody>
          <Calendar />
        </CardBody>
      </Card>

    </div>
  );
};

export default Page;
