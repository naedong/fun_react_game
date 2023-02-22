// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import '@rmwc/image-list/styles';
// import '@rmwc/image-list';
// import { ImageList, ImageListItem, ImageListImageAspectContainer, ImageListImage, ImageListSupporting, ImageListLabel  } from "@rmwc/image-list";
// import { fontStyle } from "@mui/system";
// import './links.css';
// import '@rmwc/avatar/styles'
// import { Avatar } from "@rmwc/avatar";

// function GameLink() {
//     const [labelName, setLabelName] = useState([
//         { id: 1, name: '레고게임' },
//        { id: 2, name: '슈팅게임' },
//          { id: 3, name: '미 정' }
         
//     ]);
//     const nextId = useRef(3);
//     const onCreate = () => {
//         nextId.current += 1;
//     };

//   return (
//       <>
//           <div>
//     <ImageList   masonry
//                   withTextProtection className="image-list"
//                   style={{
                
//               }}>
//                   {[
//                       {
//                           src: '/images/1.jpg',
//                           title: '레고게임',
//                           company: ' 이포넷'
//                       },
//                       {
//                           src: '/images/2.jpg',
//                           title: '슈팅게임',
//                           company: ' 이포넷'
//                       },
//                       {
//                           src: '/images/3.jpg',
//                           title: '미정',
//                           company: ' 없 음'
//                       },
      
//                   ].map((src) => (
//                     //   <Link to={}></Link>
//                       <ImageListItem
//                           key={src.src}
//                           style={{ margin: '2px', width: 'calc(100% / 5 - 4.2px)' }}
//                       >
//                           <ImageListImageAspectContainer
//                               style={{ paddingBottom: 'calc(100% / 1.5)' }}
//                           >
//                               <ImageListImage src={src.src} />
//                           </ImageListImageAspectContainer>
//                           <ImageListSupporting>
               
//                               <ImageListLabel style={{
//                                   color: 'red'
//                               }}>  
//                                   <Avatar
//                                       src={src.src}
//                                       size="large"
//                                       name="Tony Stark"
//                                   />
//                                 {src.company}
//                                   </ImageListLabel>
                              
//                               <ImageListLabel >{src.title}   </ImageListLabel>
//                           </ImageListSupporting>
//                       </ImageListItem>
                  
//   ))}
//               </ImageList>
//               </div>
//     </>
//   );
// }

// export default GameLink;

