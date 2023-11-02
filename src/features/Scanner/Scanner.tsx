import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

interface QRProps {
    onScan: (data: string | null) => void;
    onError: (err: any) => void;
    onLoad?: (() => void) | undefined;
    onImageLoad?: ((event: React.SyntheticEvent<HTMLImageElement>) => void) | undefined;
    delay?: number | false | undefined;
    facingMode?: "user" | "environment" | undefined;
    legacyMode?: boolean | undefined;
    resolution?: number | undefined;
    showViewFinder?: boolean | undefined;
    style?: any;
    className?: string | undefined;
}

const Test = (props: QRProps) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        onScan={()=>{console.log("scan")}}
        onError={(err) => {
          console.log(err);
        }   
      />
      <p>{data}</p>
    </>
  );
};