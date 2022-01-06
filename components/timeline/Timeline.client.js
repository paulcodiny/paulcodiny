import { useEffect, useLayoutEffect, useRef } from 'react';
import { Introduction } from './daily/00_Introduction.js';
import { FirstJob } from './daily/01_FirstJob.js';
import { SecondJob } from './daily/02_SecondJob.js';
import { ZoomGroup } from './daily/03_ZoomGroup.js';
import { ITScript } from './daily/04_ITScript.js';
import { Topface } from './daily/05_Topface.js';
import { Travix } from './daily/06_Travix.js';
import { NonDutch } from './daily/07_NonDutch.js';
import { ING } from './daily/08_ING.js';
import { MuscleSupplements } from './nightly/00_MuscleSupplements.js';
import { Lookslike } from './nightly/01_Lookslike.js';
import { HomeDelivery } from './nightly/02_HomeDelivery.js';
import { Webface } from './nightly/03_Webface.js';
import { LookslikeSecond } from './nightly/04_LookslikeSecond.js';
import { WebfaceSilex } from './nightly/05_WebfaceSilex.js';
import { Upechka } from './nightly/06_Upechka.js';
import { Growity } from './nightly/07_Growity.js';
import { JSPlanet } from './nightly/08_JSPlanet.js';
import { GrowthHub } from './nightly/09_GrowthHub.js';
import { HetOfDe } from './nightly/10_HetOfDe.js';
import { GrowityStudio } from './nightly/11_GrowityStudio.js';

const useIsomorphicLayoutEffect = typeof window !== 'undefined'
  ? useLayoutEffect
  : useEffect;

const distributeItems = (timelineRef) => {
  if (!timelineRef?.current) {
    return;
  }

  const distances = { left: 0, right: 0 };
  const $items = timelineRef.current.querySelectorAll('.item');
  [...$items].reverse().forEach(($item) => {
    if ($item.classList.contains('right')) {
      $item.style.top = `${distances.right}px`;
      distances.right += $item.offsetHeight;
    } else {
      $item.style.top = `${distances.left}px`;
      distances.left += $item.offsetHeight;
    }
  });

  timelineRef.current.style.height = `${Math.max(distances.left, distances.right)}px`;
};

export const Timeline = () => {
  const timelineRef = useRef();

  const observer = useRef(
    new ResizeObserver(() => {
      distributeItems(timelineRef);
    })
  );

  useIsomorphicLayoutEffect(() => {
    if (timelineRef.current) {
      observer.current.observe(timelineRef.current)
    }

    return observer.current.unobserve;
  }, [timelineRef, observer])

  useIsomorphicLayoutEffect(() => {
    distributeItems(timelineRef);
  }, [timelineRef]);

  return (
    <>
      <div className="timeline" ref={timelineRef}>
        {/* Nightly */}
        <Introduction/>
        <FirstJob/>
        <SecondJob/>
        <ZoomGroup/>
        <ITScript/>
        <Topface/>
        <Travix/>
        <NonDutch/>
        <ING/>

        {/* Daily */}
        <MuscleSupplements />
        <Lookslike />
        <HomeDelivery />
        <Webface />
        <LookslikeSecond />
        <WebfaceSilex />
        <Upechka />
        <Growity />
        <JSPlanet />
        <GrowthHub />
        <HetOfDe />
        <GrowityStudio />
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 15px 0;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: rgb(84, 74, 125);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
      `}</style>
    </>
  );
};
