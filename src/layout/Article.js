import React from 'react';
import Card from '../components/Card';
import './Article.scss';

const Article = () => {
  return (
    <article className='Article'>
      <h2 className='secondary-heading'>Latest Articles</h2>
      <div className='cards'>
        <Card
          by='By Claire Robinson'
          heading='Receive money in any currency with no fees'
          src='currency'
        >
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </Card>
        <Card
          by='By Wilson Hutton'
          heading='Treat yourself without worrying about money'
          src='restaurant'
        >
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </Card>
        <Card
          by='By Wilson Hutton'
          heading='Take your Easybank card wherever you go'
          src='plane'
        >
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you …
        </Card>
        <Card
          by='By Claire Robinson'
          heading='Our invite-only Beta accounts are now live!'
          src='confetti'
        >
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through the site ...
        </Card>
      </div>
    </article>
  );
};

export default Article;
