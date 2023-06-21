import React from 'react';
import CollapseFaq from '../../../utility/Collapse/CollapseFaq';

const Faq = () => {
    return (
      <div className="max-w-7xl mx-auto px-5 mt-20">
        <div className="text-center">
          <div className="divider w-1/4 mx-auto"> Some Faq’s </div>
          <h1 className="text-4xl font-bold">
            Work with a Dedicated SEO Company
          </h1>
          <p className="mt-3">
            Our approach to SEO is uniquely built around what we know works…and
            what we know doesn’t work. With over 200 verified factors in play.
          </p>
          <div className="mt-10 md:flex items-center gap-8">
            <div className="md:w-1/2">
              <CollapseFaq
                title={"Best Practices for Keyword Density?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"Best SEO Practices for Page Layouts?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />

              <CollapseFaq
                title={"What is off page SEO link building?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"Best SEO Practices for High Quality Content?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"What is domain authority?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
            </div>
            <div className="md:w-1/2">
              <CollapseFaq
                title={"Which SEO techniques are popular?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"What is broken link building?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />

              <CollapseFaq
                title={"Are SEO meta tags important?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"How do I conduct keyword research?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
              <CollapseFaq
                title={"Where do I start my SEO strategy?"}
                subtitle={
                  "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability."
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;