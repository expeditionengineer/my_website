import React from 'react';

const Projects: React.FC = () => {
    const text: React.JSX.Element = (
        <div className="flex flex-col gap-8 pt-30 custom-links ">
            <span className="text-4xl font-bold text-yellow-600">Projects</span>
            <p>My past and on-going projects:</p>

            <div className="relative flex flex-col gap-10">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>

                {/* Timeline Item 1 */}
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        {/* <div className="absolute left-3 top-8 w-1 bg-gray-300 h-full"></div> */}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>2024 - present</div>
                        <div>
                            <h3 className="font-bold">Democracy Next Level</h3>
                            <p>
                                The goal of this project is to build a digital decision-making platform
                                for the Mierendort-Insel district in Berlin. This includes building
                                a platform to enhance democratic processes like cooperation, information, discussion and decision to make it possible
                                for the neighbourhood to make digital-deliberate decisions. Furthermore, a half-public display network is connected
                                to the platform. The shown content on the displays should be a product of the decision process of the neighbours.
                                The plattform can be found <a href="https://democracynextlevel.com/">here</a>.
                            </p>
                            <h4 className="font-semibold">Technologies:</h4>
                            <ul className="list-disc pl-5">
                                <li>Node.Js</li>
                                <li>React</li>
                                <li>Django REST-Framework</li>
                                <li>Docker</li>
                                <li>Postgresql</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        {/* <div className="absolute left-3 top-8 w-1 bg-gray-300 h-full"></div> */}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>2022 - 2024</div>
                        <div>
                            <h3 className="font-bold">Wissensplattform - Energiewendebauen</h3>
                            <p>
                                The German Federal Ministry for Economic Affairs and Climate Protection
                                summarizes the research projects it funds in the field of energy in buildings 
                                and districts under the umbrella term research initiative Energiewendebauen.
                            </p>
                            <p>
                                One of these projects was the accompanying scientific research Energiewendebauen, which had the opportunity  
                                to analyse the scientific outcomes of the projects and to increase inter project communication.
                                One goal of this project was to implement a knowledge platform, which holds information about technical, economic, ecological and legal findings 
                                of the research projects. The platform can be found <a href="https://wissen-digital-ewb.de/">here</a>. The source code was published under the
                                MIT-license and can be found on <a href="https://github.com/TUB-DVG/wissen-digital-ewb">github</a>.
                            </p>
                            <h4 className="font-semibold">Technologies:</h4>
                            <ul className="list-disc pl-5">
                                <li>Django</li>
                                <li>Docker</li>
                                <li>Postgresql</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center">
            {text}
        </div>
    );
}

export default Projects;