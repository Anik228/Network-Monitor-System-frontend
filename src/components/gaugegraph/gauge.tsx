
"use client";
import React, { useEffect, useRef } from 'react';

interface GaugeProps {
  value: number;
  color?: string; // Adding color prop
  name?:string;
}

const Gauge: React.FC<GaugeProps> = ({ value, color ,name}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentValueRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = 280;
    const height = 280;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 4;
    const startAngle = Math.PI * 0.75;
    const endAngle = Math.PI * 0.25;

    canvas.width = width;
    canvas.height = height;
   
    if (value == null) {
      currentValueRef.current = 0.1;
    } else {
      currentValueRef.current = value;
    }

    let progressAngle;

    if (value < 5) {
      progressAngle = startAngle + (currentValueRef.current / 20) * (endAngle - startAngle);
    } else {
      progressAngle = startAngle + (currentValueRef.current / 90) * (endAngle - startAngle);
    }

    context.clearRect(0, 0, width, height);

    // Draw blank space with the specified color or default to '#676d8f'
    context.beginPath();
    context.arc(centerX, centerY, radius, progressAngle, startAngle);
    context.lineWidth = 20;
    context.strokeStyle = color || '#676d8f'; // Use specified color or default
    context.stroke();

    // Draw progress with a solid color
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, progressAngle);
    context.lineWidth = 20;
    context.strokeStyle = '#A4ADA3'; // Replace '#FF5733' with your desired color
    context.stroke();

    // Draw speed value
    const marginBottom = -10; // Adjust this value as needed
    
    // var formattedString = currentValueRef.current.toFixed(2) + '%';
    
    //console.log("current value",currentValueRef.current.toFixed(2));
    const currentValue = String(currentValueRef.current);
    //console.log("current value",currentValue.length);
    
    const speedText = currentValue.length > 5 ? currentValue.substring(0, 5) + '%' : currentValue + '%';

 // Convert to string and add percent sign
     
    context.fillStyle = color || '#676d8f';
    context.font = 'bold 20px Arial';
    context.textAlign = 'center';
    context.fillText(speedText, centerX, centerY + radius * 0.75 + marginBottom); // Add marginBottom
    // Draw name text
    if (name) {
      context.fillStyle = '#000000';
      context.font = 'bold 15px Arial';
      context.textAlign = 'center';
      context.fillText(name, centerX, centerY + radius * 2.0 + marginBottom); // Adjust position as needed
    }
  }, [value, color,name]); // Include color in the dependency array

  return (
    <div className='mb-[18px]'>
      <canvas ref={canvasRef} />
     
    </div>
  )
  
};

export default Gauge;

// import React, { useEffect, useRef } from 'react';

// interface GaugeProps {
//   value: number;
// }

// const Gauge: React.FC<GaugeProps> = ({ value }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const currentValueRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const context = canvas.getContext('2d');
//     if (!context) return;

//     const width = 280;
//     const height = 280;
//     const centerX = width / 2;
//     const centerY = height / 2;
//     const radius = width / 4;
//     const startAngle = Math.PI * 0.75;
//     const endAngle = Math.PI * 0.25;

//     canvas.width = width;
//     canvas.height = height;
   
//     if(value==null){
//       currentValueRef.current = 0.1;
//     }

//     else{
//       currentValueRef.current = value;
//     }
   

//     let progressAngle;

//     if (value < 5) {
//       progressAngle = startAngle + (currentValueRef.current / 20) * (endAngle - startAngle);
//     } else {
//       progressAngle = startAngle + (currentValueRef.current / 90) * (endAngle - startAngle);
//     }

//     context.clearRect(0, 0, width, height);

//     // Draw blank space 
//     context.beginPath();
//     context.arc(centerX, centerY, radius, progressAngle, startAngle);
//     context.lineWidth = 20;
//     context.strokeStyle = '#676d8f'; 
//     context.stroke();

//     // // Draw gradient progress
//     // const gradient = context.createLinearGradient(0, 0, width, 0);
//     // gradient.addColorStop(0, '#F74A35');
//     // gradient.addColorStop(1, '#28CB0B');
//     // context.beginPath();
//     // context.arc(centerX, centerY, radius, startAngle, progressAngle);
//     // context.lineWidth = 20;
//     // context.strokeStyle = gradient;
//     // context.stroke();

//     // Draw progress with a solid color
// context.beginPath();
// context.arc(centerX, centerY, radius, startAngle, progressAngle);
// context.lineWidth = 20;
// context.strokeStyle = '#A4ADA3'; // Replace '#FF5733' with your desired color
// context.stroke();

//     // Draw speed value
//     const marginBottom = -10; // Adjust this value as needed
//     const speedText = String(currentValueRef.current) + '%'; // Convert to string and add percent sign
       
//     context.fillStyle = '#289C06';
//     context.font = 'bold 20px Arial';
//     context.textAlign = 'center';
//     context.fillText(speedText, centerX, centerY + radius * 0.75 + marginBottom); // Add marginBottom
    
  
//   }, [value]);

//   return <canvas ref={canvasRef} />;
// };

// export default Gauge;
