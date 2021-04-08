
export function DisplayItem({ item }: any) {
  // @ts-ignore
  const [link, setLink] = useReducer((s, a) => {
    return a;
  }, undefined);
  // @ts-ignore
  const [value, setValue] = useReducer((s, a) => {
    return a;
  }, undefined);
  // @ts-ignore
  const [resource, setResource] = useReducer((s, a) => {
    return a;
  }, undefined);

  useEffect(() => {
    (async () => {
      //   // const object = await item;
      const l = `${await item}`;
      setLink(l);
      // console.log(l)
      try {
        // TODO: Optimize this - we don't want to have to send a request to
        // every link associated to a profile every timewe want to get the content
        // types
        const r = await fetch(l, {  method: 'HEAD' });
        // console.log(r);
        // if (/^image/.test(r.headers.get('content-type'))) {
          // (await r.json()).message
        if (r.ok) {
          setResource(true);
        }
          // <img title={}
        // }
        // setValue(resource.headers.get('Content-Type'));
      } catch (e) {}
      //   // try {
      //   //   const object = await item;
      //   //   setValue(`${object}`)
      //   // } catch (e) {
      //   //   setValue(e.toString());
      //   // }
    })();
    (async () => {
      const label = item && (await item[rdfs.label]);
      setValue(label && `${label}`);
    })();
    // (() => {
    //   const resource = fetch()
    // });

    // (async () => {
    //   const object = await item;
    //   if (object) {
    //     if (object.termType === 'Literal') {
    //       setValue(object.value)
    //     } else {
    //       setValue(object.value);
    //       setLink(object.value);
    //       const label = await item.label;
    //       if (label) {
    //         setValue(label.value);
    //       } else {
    //         setValue(label.value);
    //         try {
    //           // setValue(<iframe title={object.value} src={object.value}/>)

    //           const r = await fetch(object.value);
    //           setValue(r.headers.get('content-type'));
    //           // (new Element()).sho
    //           // setValue(<img src={object.value} style={{ width: '100px'}}/>);
    //           // console.log(r);
    //         } catch (e) {

    //         }

    //         // TODO PROPERLY

    //         // console.log('no labl for', object.value)
    //       }
    //     }
    //   }
    // })()
  }, [item]);

  // if (object) {
  //   if (object?.termType !== 'Literal') {
  //     setLink(object?.value);
  //     setValue(object?.value)
  //     const label = await object?.label;
  // if (label) {
  //   setValue(label);
  // }
  //   } else {
  //     setValue(object?.value)
  //   }
  //   const v = (await item?.label) ?? (await item);
  //   console.log(v);
  //   setValue(`${v}`)
  // }
  // })();
  const content = value ?? /[^#/]*(?=[#/])?$/i.exec(link) ?? 'loading...';
  // console.log(link);
  if (resource) {
    return (
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={link} title={content ?? ''} alt={content} width={100} />
      </a>
    )
  } else {
    return link ? (
      <a href={link} target='_blank' rel='noreferrer'>
        {content}
      </a>
    ) : (
      content
    );
  }
}

async function DetailBody({ item }: any) {
  return <>hi</>;
}

// function LdflexItem(item) {
//   const [resolvedItem, setResolved] = useState({});
//   useEffect(() => {
//     (async () => {
//       const resolved = await item;
//       setResolved(item);
//     })
//   }, [item])
// }

// function DisplayItems({item}: any) {
//   const [items, dispatch] = useReducer((s, a) => {
//     return [...s, a];
//   }, []);

//   // const [items, setItems]
//   // for await (const item)
//   let items = [];
//   for await (const i of item) {
//     items
//   }
// }

// export function Describe({ item }: any) {
//   const [properties, setProperties] = useState<any[]>([]);
//   useEffect(() => {
//     (async () => {
//       const predicates = await item.predicatesOf.toArray();
//       setProperties(predicates);
//       console.log(predicates);
//     })();
//   }, [item]);
//   return (
//     <div>
//       {/* Inside div */}
//       {/* <Suspense fallback={'loading ...'}> */}
//       <h3 style={{ textAlign: 'center' }}>
//         <DisplayItem item={item} />  -  <DisplayItem item={item[rdf.type]} />
//         <table style={{ textAlign: 'left' }}>
//           {properties.filter(x => `${x}` !== rdf.type && `${x}` !== rdfs.label).map((x) => {
//             return (
//               <tr>
//                 <td>
//                   <DisplayItem item={x} />
//                 </td>
//                 <td>
//                   <DisplayItem item={item[x]} />
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//         {/* <Suspense fallback={'loading ...'}>
//         <DetailBody item={item['http://xmlns.com/foaf/0.1/img']}/>
//         {/* {item.predicatesOf.map((x: any) => x)} */}
//         {/* <Suspense fallback={'loading ...'}>
//         {item.predicatesOf.map((x: any) => {
//           return <><DisplayItem item={x}/>: <DisplayItem item={item[x]}/></>
//         })} */}
//         {/* </Suspense> */}
//       </h3>

//       {/* </Suspense> */}

//       {/* <Suspense fallback={'Loading ...'}>
//       <h1>{await item.label ?? item} ({await item.a.label ?? await item.a})</h1>
//       </Suspense>
//        */}
//     </div>
//   );
// }